import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";


export type UserModelDocument = UserModel & Document

@Schema({timestamps:true})
export class UserModel{

    @Prop({ required:true })
    email : string

    @Prop({ required : true })
    password : string

    @Prop({ required : false})
    name : string

    @Prop({
         required:false ,
         type : [String]

    })
    uploads : string[]
    // @Prop({
    //     required: false,
    //     type: [mongoose.Schema.Types.ObjectId],
    //     ref : ProjectSchemaName
    // })
    // Projects : ProjectModel

    // @Prop({
    //      required:false
    //      type: [mongoose.Schema.Types.ObjectId],
    // //     ref : ProjectSchemaName
        
    //     })
    // usedTemplates : TemplateModel
    
}

export const UserSchema = SchemaFactory.createForClass(UserModel)

export const UserSchemaName = 'user'