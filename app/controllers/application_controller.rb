class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :universal_props

  def universal_props
    {
      current_user: current_user,
      user_agent: request.user_agent,
      csrf_token: form_authenticity_token
    }
  end
end
