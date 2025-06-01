import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../dto/projects/create-project.dto';
import { UpdateProjectDto } from '../dto/projects/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectDocument, ProjectSchemaName } from 'src/models/projectModel';
import { Model } from 'mongoose';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(ProjectSchemaName)
    private readonly projectModel : Model<ProjectDocument>
  ){}
 async create(createProjectDto: CreateProjectDto) {
    return await this.projectModel.create(createProjectDto)
  }

  findAll() {
    return `This action returns all project`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
