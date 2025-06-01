import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { Allow, IsArray, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

export class ProjectData {
    @IsOptional()
    html : string

    @IsOptional()
    css : string

    @IsOptional()
    @IsArray()
    components : any []

    @IsOptional()
    @IsArray()
    styles : any []

    
    @IsOptional()
    @IsArray()
    dataSources : any []

    
    @IsOptional()
    @IsArray()
    assets : any []

    
    @IsOptional()
    @IsArray()
    symbols : any []

    
    @IsOptional()
    @IsArray()
    pages : any []

}


export class CreateProjectDto {
    
    @ApiProperty({required : true ,description : "Title of the Web-Page"})
    @IsNotEmpty()
    @IsString()
    title : string

    @ApiProperty({ required : true , description:"User Created Web-Page"})
    @IsNotEmpty()
    @Type(() => ProjectData)
    project : ProjectData 

    
    @ApiProperty({ required : false , description:"Is hosted or not"})
    @IsNotEmpty()
    hosted : boolean

    
    @ApiProperty({ required : false , description:"Web-Page Description"})
    @IsOptional()
    description : string


    
    @ApiProperty({ required : false , description:"Web-Page Hosted URL"})
    @IsOptional()
    hostedURL : string


    
    
    @ApiProperty({ required : false , description:"User Id"})
    @IsOptional()
    createdBy : string | Types.ObjectId
}
