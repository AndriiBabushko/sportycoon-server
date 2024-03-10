import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CommentModel } from '@entities/comment/comment.model';
import { CreateCommentDTO } from '@entities/comment/dto/create-comment.dto';
import { UpdateCommentDTO } from '@entities/comment/dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(CommentModel) private commentModel: typeof CommentModel,
  ) {}

  findOne(filter: { where: { id?: number } }): Promise<CommentModel> {
    return this.commentModel.findOne({ ...filter });
  }

  async createComment(createCommentDTO: CreateCommentDTO) {
    const comment = new CommentModel();

    Object.keys(createCommentDTO).forEach((key) => {
      comment[key] = createCommentDTO[key];
    });

    await comment.save();

    return comment;
  }

  async patchComment(id: number, updateCommentDTO: UpdateCommentDTO) {
    const comment = await this.findOne({
      where: { id },
    });

    if (!comment) {
      throw new UnprocessableEntityException('Comment not found!');
    }

    Object.keys(updateCommentDTO).forEach((key) => {
      comment[key] = updateCommentDTO[key];
    });

    await comment.save();

    return comment;
  }

  async deleteComment(id: number) {
    const comment = await this.findOne({
      where: { id },
    });

    if (!comment) {
      throw new UnprocessableEntityException('Comment not found!');
    }

    await comment.destroy();

    return comment;
  }
}
