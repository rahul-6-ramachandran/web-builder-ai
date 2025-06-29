import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema, ProjectSchemaName } from 'src/models/projectModel';
import { SharedModule } from 'src/shared.module';

@Module({
  imports : [
    MongooseModule.forFeature([{
      name : ProjectSchemaName , schema : ProjectSchema,
      
    }]),
    SharedModule
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
