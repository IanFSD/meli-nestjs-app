import { Module } from "@nestjs/common";
import { ParameterService } from "./parameter.service";
import { ParameterController } from "./parameter.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ParameterEntity } from "../resources/entity/parameter.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ParameterEntity])],
  providers: [ParameterService],
  controllers: [ParameterController],
})
export class ParameterModule {}
