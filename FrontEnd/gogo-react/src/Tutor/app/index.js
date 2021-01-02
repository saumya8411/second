import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';
// import { ProtectedRoute, UserRole } from '../../helpers/authHelper';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const Pages = React.lazy(() => import('../../CustomComponents/Library/index'));
const LiveSession = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ '../../CustomComponents/Remotelook')
);
const RecordedSession = React.lazy(() =>
  import(
    /* webpackChunkName: "pages" */ '../../CustomComponents/SessionMaterial'
  )
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Ui = React.lazy(() =>
  import(
    /* webpackChunkName: "ui" */ '../../CustomComponents/EmailCommunicationfunction'
  )
);
const Menu = React.lazy(() =>
  import(/* webpackChunkName: "menu" */ './menu')
); /*'./blank-page')
); */
/* const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ const Mydash = React.lazy(
  () => import(/* webpackChunkName: "blank-page" */ './mydashboard')
);
const Themepage = React.lazy(() =>
  import(
    /* webpackChunkName: "blank-page" */ '../../CustomComponents/ThemePage'
  )
);
const Message = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './message')
);
const Preview = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ '../../CustomComponents/preview')
);
const Support = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ '../../CustomComponents/support')
);
const Privacy = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './privacy')
);
const Cookie = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './cookie')
);
const Terms = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './terms')
);
const IRP = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './irp')
);
const Anti = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './antispam')
);
const Abuse = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './abuse')
);

const Validate = React.lazy(() => import('./Validate'));

const SessionDetail = React.lazy(() =>
  import(
    /* webpackChunkName: "blank-page" */ '../../CustomComponents/RemotesessionLook'
  )
);
const App = ({ match }) => {
  return (
    <AppLayout>
      <Validate />
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/blankpage`}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboards {...props} />}
            />
            {/* <Route
              path={`${match.url}/blankpage`}
              render={(props) => <BlankPage {...props} />}
            /> */}
            <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            />
            <Route
              path={`${match.url}/mydashboard`}
              render={(props) => <Mydash {...props} />}
            />
            <Route
              path={`${match.url}/preview`}
              render={(props) => <Preview {...props} />}
            />
            <Route
              path={`${match.url}/support`}
              render={(props) => <Support {...props} />}
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
              render={(props) => <Themepage {...props} />}
            />
            <Route
              path={`${match.url}/message`}
              render={(props) => <Message {...props} />}
            />
            <Route
              path={`${match.url}/sessiondetail`}
              render={(props) => <SessionDetail {...props} />}
            />
            <Route
              path={`${match.url}/privacy`}
              render={(props) => <Privacy {...props} />}
            />
            <Route
              path={`${match.url}/cookie`}
              render={(props) => <Cookie {...props} />}
            />
            <Route
              path={`${match.url}/terms`}
              render={(props) => <Terms {...props} />}
            />
            <Route
              path={`${match.url}/irp`}
              render={(props) => <IRP {...props} />}
            />
            <Route
              path={`${match.url}/antispam`}
              render={(props) => <Anti {...props} />}
            />
            <Route
              path={`${match.url}/abuse`}
              render={(props) => <Abuse {...props} />}
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
