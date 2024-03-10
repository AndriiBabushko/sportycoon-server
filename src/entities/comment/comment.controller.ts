import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Patch,
  Delete,
  UseGuards,
  Param,
  Body,
} from '@nestjs/common';
import { ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CommentService } from '@entities/comment/comment.service';
import { AuthenticatedGuard } from '@entities/auth/authenticated.guard';
import { CreateCommentDTO } from '@entities/comment/dto/create-comment.dto';
import { UpdateCommentDTO } from '@entities/comment/dto/update-comment.dto';

@ApiTags('comment', 'sportycoon')
@Controller('api/comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOkResponse({})
  @ApiForbiddenResponse({})
  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthenticatedGuard)
  async create(@Body() createCommentDTO: CreateCommentDTO) {
    const comment = await this.commentService.createComment(createCommentDTO);

    return {
      comment,
      message: 'Comment created!',
    };
  }

  @ApiOkResponse({})
  @ApiForbiddenResponse({})
  @Patch('/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthenticatedGuard)
  async patch(
    @Param('id') id: string,
    @Body() updateCommentDTO: UpdateCommentDTO,
  ) {
    const comment = await this.commentService.patchComment(
      +id,
      updateCommentDTO,
    );

    return {
      comment,
      message: 'Comment updated!',
    };
  }

  @ApiOkResponse({})
  @ApiForbiddenResponse({})
  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthenticatedGuard)
  async delete(@Param('id') id: string) {
    await this.commentService.deleteComment(+id);

    return {
      message: 'Comment deleted!',
    };
  }
}
