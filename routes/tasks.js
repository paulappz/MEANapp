var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://bjmarcson:ronaldo@ds058369.mlab.com:58369/affordable_data_ng', ['tasks']);

// Get All Tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }else {
            res.json(tasks);
        }
    });
});

// Get Single Task

router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, task){
        if(err){
            res.send(err);
        }else {
            res.json(task);
        }
    });
});

// Save Task
router.post('/task', function(req, res, next){
    var task = req.body;
    if(!task.phomeNo || !task.DataSize || !task.Status || !task.Amount || (task.Comments + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }else {
                res.json(task);
            }
        });
    }
});

// Delete Task
router.delete('/task/:id', function(req, res, next){
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},function(err, task){
        if(err){
            res.send(err);
        }else {
            res.json(task);
        }
    });
});

// Update Task
router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};

    if(task.phoneNo){
        updTask.phoneNo = task.phoneNo;
    }

    if(task.DataSize){
        updTask.DataSize = task.Data-Size;
    }
     if(task.Status){
        updTask.Status = task.Status;
    }
     if(task.Amount){
        updTask.Amount = task.Amount;
    }
     if(task.Comments){
        updTask.Comments = task.Comments;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
        if(err){
            res.send(err);
        }else {
            res.json(task);
        }
    });
    }
});

module.exports = router;