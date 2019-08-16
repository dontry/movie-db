import React, { Component } from "react";
import { Container } from "layout/Container";
import { connect } from "react-redux";
import WatchList from "components/WatchList";
import { RootState } from "reducers/state";
import { Dispatch } from "redux";
import { FETCH_WATCHLIST_REQUEST } from "actions/watchlist";
import { Show } from "models/Show";

interface Props {
  watchlist: Show[];
  getWatchlist(): void;
}

class MyWatchList extends Component<Props> {
  public componentDidMount() {
    if (this.props.watchlist.length === 0) {
      this.props.getWatchlist();
    }
  }
  public render() {
    return (
      <Container>
        <WatchList />
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  watchlist: state.watchlist
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getWatchlist() {
    dispatch({ type: FETCH_WATCHLIST_REQUEST });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWatchList);
