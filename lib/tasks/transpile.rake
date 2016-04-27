namespace :babel do
	  desc "transpile code in react folder to javascripts folder"
	  task transpile_react_folder: :environment do |t, args|
	    react_folder = Rails.root.join("react")
	    app_assets_javascripts_folder = Rails.root.join("app/assets/javascripts/react")
	    system("babel --presets react #{react_folder} --watch --out-dir #{app_assets_javascripts_folder}")
  end
end
