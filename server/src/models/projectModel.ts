import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { UserModel, UserSchemaName } from "./usermodel";

export type ProjectDocument = ProjectModel & Document


Schema({timestamps:true})
export class ProjectModel{
    @Prop({required : true})
    title : string

    @Prop({required : true})
    project : string

    @Prop({type : Types.ObjectId , ref : UserSchemaName , required : true})
    createdBy : UserModel

    @Prop({ default : false})
    hosted : boolean

    @Prop({default : '', required : false})
    description : string

    @Prop({default : '' , required : false})
    hostedURL : string

}

export const ProjectSchema = SchemaFactory.createForClass(ProjectModel)
export const ProjectSchemaName = 'Project'