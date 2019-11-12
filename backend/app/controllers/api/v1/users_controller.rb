class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show,:update,:destroy]
  skip_before_action :authorized, only: [:create]

  def index
    users = User.all
    render json: users, status: 200
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      render json: { user: UserSerializer.new(@user) }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def update
    @user.update(user_params)
    render json: @user, status: 200
  end

  def destroy
    userId = @user.id
    @user.destroy
    render json: {message:"Zap! user deleted", userId:userId}
  end

  def show
    render json: @user, status: 200
  end

  private
  def user_params
    params.permit(:name)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
