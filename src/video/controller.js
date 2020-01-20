'use-strict';

const { videoModel } = require('./model');

exports.getVideoAll = async (req, res) => {
    try{
        const getVideoAllData = await videoModel.findAll();
        if(getVideoAllData){
            res.json({
                status : 'success',
                response : getVideoAllData
            })
        }
    }catch(error){
        res.json({
            status: 'error',
            response : error
        })
    }
}

exports.getVideoById = async (req,res) => {
    try{
        const id = req.params.id;

        const VideoById = await videoModel.findOne({
            where : { id }
        })
        if(VideoById){
            res.json({
                status : 'success',
                response : VideoById,
            })
        }else{
            res.json({
                status : 'error',
                response : 'Video not found'
            })
        }
    }catch(error){
        res.json({
            status : 'error',
            response : error
        })
    }
}