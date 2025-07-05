import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from '../dto/projects/create-project.dto';
import { UpdateProjectDto } from '../dto/projects/update-project.dto';
import { AuthGuard } from 'src/middlewares/auth.guard';
import { AuthRequest, UserPayload } from 'src/common.types';


@Controller('api/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @UseGuards(AuthGuard)
  createNewProject(
    @Req() request : AuthRequest,
    @Body() createProjectDto: CreateProjectDto
  ) {
    const {user_id} = request.user
    console.log(createProjectDto,"createProject")
    return this.projectService.create(createProjectDto,user_id);
  }

  @Get()
  findAll(
    @Req() request : AuthRequest,
  ) {
    const {user_id} = request.user
    return this.projectService.findAll(user_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
