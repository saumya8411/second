import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';
// import { ProtectedRoute, UserRole } from '../../helpers/authHelper';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ '../../CustomComponents/Library')
);
const LiveSession = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ '../../CustomComponents/Remotelook')
);
const RecordedSession = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ '../../CustomComponents/RemotesessionLook')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ '../../CustomComponents/EmailCommunicationfunction'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ '../../CustomComponents/ThemePage')
);
const SessionDetail = React.lazy(() =>
import(/* webpackChunkName: "blank-page" */ '../../CustomComponents/RemotesessionLook')
);
const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboard`}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboards {...props} />}
            />
            <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            />
            {/* <ProtectedRoute
                    path={`${match.url}/applications`}
                    component={Applications}
                    roles={[UserRole.Admin]}
            /> */}
            <Route
              path={`${match.url}/library`}
              render={(props) => <Pages {...props} />}
            />
            <Route
              path={`${match.url}/livesession`}
              render={(props) => <LiveSession {...props} />}
            />
            <Route
              path={`${match.url}/recordedsession`}
              render={(props) => <RecordedSession {...props} />}
            />
            <Route
              path={`${match.url}/communication`}
              render={(props) => <Ui {...props} />}
            />
            <Route
              path={`${match.url}/stats`}
              render={(props) => <Menu {...props} />}
            />
            <Route
              path={`${match.url}/themesetting`}
              render={(props) => <BlankPage {...props} />}
            />
              <Route
              path={`${match.url}/sessiondetail`}
              render={(props) => <SessionDetail {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
