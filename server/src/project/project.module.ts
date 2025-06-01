import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema, ProjectSchemaName } from 'src/models/projectModel';

@Module({
  imports : [
    MongooseModule.forFeature([{
      name : ProjectSchemaName , schema : ProjectSchema
    }])
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
