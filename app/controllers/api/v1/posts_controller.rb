module Api
  module V1 
    class PostsController < ApplicationController
      def index
        @posts = Post.all # gets all posts in db
        render json: @posts
      end
    
      def show
        @post = Post.find(params[:id]) # params = url params
        render json: @post
      end
    
      def new
        @post = Post.new
      end
    
      def create
        @post  = Post.new(post_params)
    
        if(@post.save)
          render json: @post
        else
          render json: @post.errors
        end
      end
    
      def edit
        @post = Post.find(params[:id])
      end
    
      def update
        @post = Post.find(params[:id])
    
        if @post.update(post_params)
          redirect_to @post
        else
          render :edit, status: :unprocessable_entity
        end
      end
    
      def destroy
        @post = Post.find(params[:id])
        @post.destroy
    
        redirect_to root_path, status: :see_other
      end
    
      private
          def post_params
            params.require(:post).permit(:pictureUrl, :caption) # only accept these things in the params (typed)
          end
    end    
  end
end
