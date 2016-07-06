class StaticControllerTest < ActionController::TestCase
  test "should get index" do
    get :show, { "page" => "index" }
    assert_response :success
    assert_template :index
  end
end
