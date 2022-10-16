class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session # change into using ::API instead of this hack
end
