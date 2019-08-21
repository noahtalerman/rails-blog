class ApplicationController < ActionController::Base

    helper_method :admin?
    
    protected

    # def authorize
    #     unless admin?
    #         flash[:error] = "unauthorized access"
    #         redirect_to root_path
    #         false
    #     end
    # end

    def admin?
        session[:password] == "noaht"
    end
end
