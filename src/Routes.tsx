import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import GetStarted from './pages/start/GetStarted';
import CreateMembershipProposal from './pages/membership/CreateMembershipProposal';
import Membership from './pages/membership/Membership';
import MembershipDetails from './pages/membership/MembershipDetails';
import CreateTransferProposal from './pages/transfers/CreateTransferProposal';
import Transfers from './pages/transfers/Transfers';
import TransferDetails from './pages/transfers/TransferDetails';
import CreateTributeProposal from './pages/tributes/CreateTributeProposal';
import Tributes from './pages/tributes/Tributes';
import TributeDetails from './pages/tributes/TributeDetails';
import CreateGovernanceProposal from './pages/governance/CreateGovernanceProposal';
import GovernanceProposals from './pages/governance/GovernanceProposals';
import GovernanceProposalDetails from './pages/governance/GovernanceProposalDetails';
import NotFound from './pages/subpages/NotFound';

export default function Routes() {
  return (
    <Switch>
      {[
        <Route key="splash" exact path="/" render={() => <GetStarted />} />,
        <Route
          key="join"
          exact
          path="/join"
          render={() => <CreateMembershipProposal />}
        />,
        <Route
          key="membership"
          exact
          path="/membership"
          render={() => <Membership />}
        />,
        <Route
          key="membership-details"
          exact
          path="/membership/:proposalHash"
          render={() => <MembershipDetails />}
        />,
        <Route
          key="transfer"
          exact
          path="/transfer"
          render={() => <CreateTransferProposal />}
        />,
        <Route
          key="transfers"
          exact
          path="/transfers"
          render={() => <Transfers />}
        />,
        <Route
          key="transfer-details"
          exact
          path="/transfers/:proposalHash"
          render={() => <TransferDetails />}
        />,
        <Route
          key="tribute"
          exact
          path="/tribute"
          render={() => <CreateTributeProposal />}
        />,
        <Route
          key="tributes"
          exact
          path="/tributes"
          render={() => <Tributes />}
        />,
        <Route
          key="tribute-details"
          exact
          path="/tributes/:proposalHash"
          render={() => <TributeDetails />}
        />,
        <Route
          key="governance-proposal"
          exact
          path="/governance-proposal"
          render={() => <CreateGovernanceProposal />}
        />,
        <Route
          key="governance-proposals"
          exact
          path="/governance-proposals"
          render={() => <GovernanceProposals />}
        />,
        <Route
          key="governance-proposal-details"
          exact
          path="/governance-proposals/:proposalHash"
          render={() => <GovernanceProposalDetails />}
        />,
        <Route key="notfound" exact path="/404" render={() => <NotFound />} />,
        <Route
          key="redirecttonotfound"
          render={() => <Redirect to="/404" />}
        />,
      ]}
    </Switch>
  );
}
