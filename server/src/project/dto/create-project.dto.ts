import { ApiProperty } from "@nestjs/swagger";
import { Allow, IsEmail, IsNotEmpty } from "class-validator";

export class CreateProjectDto {
    
    @ApiProperty({ required : true , description:"User registration Email"})
    @IsNotEmpty()
    @IsEmail()
    @Allow()
    data : any

}
