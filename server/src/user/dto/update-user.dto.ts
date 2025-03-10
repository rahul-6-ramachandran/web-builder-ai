import { PartialType } from '@nestjs/swagger';
import { UserDTO } from 'src/dto/user/userdto';


export class UpdateUserDto extends PartialType(UserDTO) {

    
}
