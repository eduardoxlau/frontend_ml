import { shallow } from "enzyme";
import { Item as dataDefault } from "utils/constants";
import Item from "../../pages/items/[id].js";

const mockITEM = dataDefault;
jest.mock("../../fetch_api", () => ({
  getItem: () => Promise.resolve({ item: mockITEM }),
}));

describe("Items", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Item />);
    expect(wrapper).toMatchSnapshot();
  });

  it("shouldn return one object", async () => {
    const props = await Item.getInitialProps({
      query: { id: "1" },
    });
    expect(props.item).toEqual(dataDefault);
  });
});
