class PostsController < ApplicationController
  def index
    @posts = Post.all # gets all posts in db
  end

  def show
    @post = Post.find(params[:id]) # params = url params
  end

  def new
    @post = Post.new
  end

  def create
    @post  = Post.new(post_params)

    if(@post.save)
      redirect_to @post
    else
      render :new, status: :unprocessable_entity #this is a 422 status code
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
