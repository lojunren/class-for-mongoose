var mongoose =require('mongoose');
var Schema =mongoose.Schema;
var diarySchema = Schema({
    is_favored:Boolean,
    channel:{type:String,default:"gengmei"},
    title_style_type:String,
    reply_num:Number,
    zones:[{
        id:Number,
        name:String
    }],
    is_sink:Boolean,
    is_following:Boolean,
    created_time:Number,
    is_cash_back:Boolean,
    operation_info:{
        comment:{
            bad:[{
                name:String,
                select:Number
            }],
            good:[{
                name:String,
                select:Number
            }]
        },
        rating:Number,
        doctor_is_online:Boolean,
        operator_is_hospital_officer:Boolean,
        hospital_id:String,
        operation_items:[{
            id:Number,
            tag_id:Number,
            name:String
        }],
        order_id:String,
        service_name:String,
        price:Number,
        interval:String,
        operation_timestamp:Number,
        doctor_name:String,
        pre_operation_images:[],
        service_id:Number,
        doctor_id:String,
        pre_operation_image_amount:String,
        hospital_name:String,
        operation_item_amount:String
    },
    user_id:Number,
    is_essence:Boolean,
    last_topic_add_time:Number,
    user_portrait:String,
    latest_topic_id:Number,
    diary_id:{type:Number,index:true},
    vote_num:Number,
    tags_new_era:[{
        name:String,
        id:Number
    }],
    content:String,
    is_identification:Boolean,
    city:String,
    author_type:String,
    tags:[{
        name:String,
        id:Number
    }],
    is_headline:Boolean,
    images:[{
        image_wide:String,
        image_thumb:String,
        image:String,
        image_half:String,
        desc:String
    }],
    last_modified:Number,
    user:{
        city:String,
        user_id:Number,
        hospital_id:String,
        portrait:String,
        doctor_id:String,
        user_name:String,
        membership_level:String
    },
    is_online:Boolean,
    date:Number,
    membership_level:String,
    title:String,
    view_num:String,
    user_nickname:String,
    diary_amount:Number,
    is_voted:Boolean
});
module.exports = function(conn){
    return conn.model('Diary',diarySchema);
}