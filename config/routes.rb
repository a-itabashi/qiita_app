Rails.application.routes.draw do
  root to: "homes#index"

  namespace :api, { format: "json" } do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }
    end
  end
  root to: "homes#index"

end