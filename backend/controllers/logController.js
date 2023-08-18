const logsModel = require('../models/logsModel')

module.exports.index = async (req,res) => {
    let log;
    try{
        log = await logsModel.find();
    }
    catch(err){
        console.log(err)
    }

    res.render('Index', { log })
}

module.exports.new = (req,res) => {
    res.render('New')
}

module.exports.delete = async (req, res) => {
    await logsModel.findByIdAndDelete(req.params.id)
    res.redirect('/logs')
}

module.exports.update = async (req, res) => {
    await logsModel.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/logs/${req.params.id}`)
}



module.exports.create = async (req,res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    try{
        await logsModel.create(req.body)
        res.redirect('/logs')
    }
    catch(err){
        console.log(err)
    }
}

module.exports.edit = async (req, res) => {
    const log = await logsModel.findById(req.params.id)
    console.log(log)
    console.log('edit route')
    res.render('Edit', { log })
}

module.exports.show = async(req,res) => {
    let log;
    try{
        log = await logsModel.findById(req.params.id)
        res.render('Show',{ log })
    }
    catch(err){
        console.log(err.message)
    }
}