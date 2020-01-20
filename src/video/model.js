'use-strict';

const { DataTypes } = require('sequelize');
const Sequelize  = require('../../config/connect');

exports.videoModel = Sequelize.define(
    'videos',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING(50)
        },
        actress:{
            type: DataTypes.STRING(50)
        },
        url:{
            type: DataTypes.TEXT
        },
        date_added: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);