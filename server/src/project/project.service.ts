import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../dto/projects/create-project.dto';
import { UpdateProjectDto } from '../dto/projects/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectDocument, ProjectSchemaName } from 'src/models/projectModel';
import { Model, Types } from 'mongoose';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(ProjectSchemaName)
    private readonly projectModel : Model<ProjectDocument>
  ){}
 async create(project: CreateProjectDto , user_id : string) {
  const newProject = {
    title : "New Project",
    project : {
      ...project
    },
    createdBy : new Types.ObjectId(user_id),
  }
    return await this.projectModel.create(newProject)
  }

  async findAll(user_id : string) {
    return await this.projectModel.find({
      createdBy : new Types.ObjectId(user_id) 
    })
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
