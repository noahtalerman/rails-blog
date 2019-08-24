class ArticlesController < ApplicationController
    include ArticlesHelper
    
    layout "application", only: :index;

    def index
        @articles = Article.all
        @tags = Tag.all
    end

    def update
        @article = Article.find(params[:id])
        @article.update(article_params)

        flash.notice = "Article Updated!"
        # flash.notice = "Article '#{@article.title}' Updated!"

        redirect_to article_path(@article)
    end

    def show
        @article = Article.find(params[:id])
        @tags = Tag.all
        @comment = Comment.new
        @comment.article_id = @article.id
    end

    def new
        @article = Article.new
        @tags = Tag.all
    end

    def edit
        @article = Article.find(params[:id])
        @tags = Tag.all
    end

    def create
        @article = Article.new(article_params)
        @article.save

        flash.notice = "Article Created!"

        redirect_to article_path(@article)
    end

    def destroy
        @article = Article.find(params[:id])
        title = @article.title
        @article.destroy

        flash.notice = "Article '#{title}' Successfully Deleted!"

        redirect_to articles_path
    end

end
