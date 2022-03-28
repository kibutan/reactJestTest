import renderer from "react-test-renderer";
import Main from "../Components/Main";

describe("snapshot-test tutorial", () => {
  test("test2", () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
