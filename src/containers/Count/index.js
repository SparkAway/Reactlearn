
import Count from "../../components/Count";
import {connect} from "react-redux";
import store from "../../redux/store/store";
import {
    createDecrementAction, createDiviAction,
    createIncrementAction,
    createMultiAction
} from "../../redux/acton_creators/countAction_creator";
export default connect(
    state=>({count:state.one}),
    {
        addnumber: createIncrementAction,
        dec:createDecrementAction,
        multi:createMultiAction,
        divi:createDiviAction
    }
)(Count);
