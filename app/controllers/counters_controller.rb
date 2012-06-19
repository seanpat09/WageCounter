class CountersController < ApplicationController

  def counter
    if params[:wage].present?
      @wage = params[:wage].to_f 
      @per_second = @wage/3600
    end
  end

end

