Rails.application.routes.draw do
  # Site root
  root to: "static#show", page: "index"

  # Static routes
  get "/:page" => "static#show"

  # Devise routes
  devise_for :users
end
