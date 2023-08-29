const logger = (req,res,next) => {
    const log =new Date().toLocaleString()
    //return res.status(200).json({time :log})
    req.timelog = log
    next()

}
module.exports = logger