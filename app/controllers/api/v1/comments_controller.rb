module Api
    module V1 
        class CommentsController < ApplicationController
            def create
                @post = Post.find(params[:post_id])
                @comment = @post.comments.create(comment_params) # create comment as a child of post
                redirect_to post_path(@post)
            end
        
            private
                def comment_params
                    params.require(:comment).permit(:commenter, :body)
                end
        end
    end
end
