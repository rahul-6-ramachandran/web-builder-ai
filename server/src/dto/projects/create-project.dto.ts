import { ApiProperty } from "@nestjs/swagger";
import { Allow, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateProjectDto {
    
    @ApiProperty({required : true ,description : "Title of the Web-Page"})
    @IsNotEmpty()
    @IsString()
    title : string

    @ApiProperty({ required : true , description:"User Created Web-Page"})
    @IsNotEmpty()
    @Allow()
    project : any

    
    @ApiProperty({ required : false , description:"Is hosted or not"})
    @IsNotEmpty()
    @Allow()
    hosted : boolean

    
    @ApiProperty({ required : false , description:"Web-Page Description"})
    @IsNotEmpty()
    @Allow()
    description : string


    
    @ApiProperty({ required : false , description:"Web-Page Hosted URL"})
    @IsNotEmpty()
    @Allow()
    hostedURL : string


    
    
    @ApiProperty({ required : false , description:"User Id"})
    @IsNotEmpty()
    @Allow()
    createdBy : string | Types.ObjectId
}
