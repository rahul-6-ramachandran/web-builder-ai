import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { Allow, IsArray, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";



export class CreateProjectDto {
   

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

