module ArticlesHelper

    def article_params
        params.require(:article).permit(:title, :preview, :body, :tag_list, :image)
    end

end
