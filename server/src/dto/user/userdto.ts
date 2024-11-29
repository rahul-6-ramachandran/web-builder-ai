import { ApiProperty } from "@nestjs/swagger";
import { Allow, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class UserDTO {
    @ApiProperty({ required : true , description:"User registration Email"})
    @IsNotEmpty()
    @IsEmail()
    @Allow()
    email : string

    @ApiProperty({ required : true , minLength: 6 , description:"User registration Password"})
    @IsNotEmpty()
    @MinLength(6)
    @Allow()
    password : string

    @ApiProperty({ required : false , description:"Username"})
    @IsOptional()
    @IsString()
    @Allow()
    name : string

    @ApiProperty({ required : true , minLength: 6 , description:"User uploads"})
    @IsOptional()
    @Allow()
    uploads : string[]
   
    // @ApiProperty({ required : true , minLength: 6 , description:"Projects of the user"})
    // @IsNotEmpty()
    // // Projects : ProjectModel

    // @ApiProperty({ required : true , minLength: 6 , description:"User registration Password"})
    // @IsNotEmpty()
    // usedTemplates : TemplateModel
}