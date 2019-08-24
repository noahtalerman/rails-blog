class TagsController < ApplicationController
    def index
        @tags = Tag.all
        @tags.each do |tag|
            if tag.articles.length == 0
                tag.destroy
            end
        end
    end

    def show
        @tags = Tag.all
        @tag = Tag.find(params[:id])
    end

    def destroy
        @tag = Tag.find(params[:id])
        @tag.destroy

        redirect_to tags_path
    end
end
