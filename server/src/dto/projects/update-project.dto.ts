import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {

     
    @ApiProperty({required : false ,description : "Title of the Web-Page"})
    @IsOptional()
    @IsString()
    title : string

    @ApiProperty({ required : true , description:"User Created Web-Page"})
    @IsNotEmpty()
    // @Type(() => ProjectData)
    project : any

    
    @ApiProperty({ required : false , description:"Is hosted or not"})
    @IsOptional()
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
