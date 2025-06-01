import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { UserModel, UserSchemaName } from "./usermodel";

export type ProjectDocument = ProjectModel & Document



@Schema()
export class ProjectData {
    @Prop({ type: String  , required : false})
    html: string;
  
    @Prop({ type: String  , required : false})
    css: string;
  
    @Prop({ type: Array, default: [] , required : true })
    components: any[];
  
    @Prop({ type: Array, default: [] , required : true })
    dataSources : any []

    @Prop({ type: Array, default: [] , required : true})
    styles: any[];
  
    @Prop({ type: Array, default: [] , required : true })
    assets: any[];
  
    @Prop({ type: Array, default: [] , required : true})
    pages: any[];

    @Prop({ type: Array, default: [] , required : true})
    symbols : any []
}

export const ProjectDataSchema = SchemaFactory.createForClass(ProjectData);

@Schema({timestamps:true})
export class ProjectModel{
    @Prop({required : true})
    title : string

    @Prop({required : true , type : ProjectDataSchema})
    project : ProjectData

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