import React, { useContext, useState, useEffect } from 'react';
import SelectProfileContainer from '../containers/profiles';
import { FirebaseContext } from '../context/firebase';
import { Header, Loading } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    console.log('profile', profile)
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [profile.displayName]);
  return profile.displayName ? (
    <>
    {loading ? (<Loading src={user.photoURL}/>) : (
      <Loading.ReleaseBody />
    )}
    <Header src="joker1">
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}></Header.Logo>
      </Header.Frame>
      <Header.Feature>
        <Header.FeatureCallOut>Whatch Joker now</Header.FeatureCallOut>
        <Header.Text>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded
          and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.
          This path brings him face-to-face with his alter-ego: the Joker.</Header.Text>
      </Header.Feature>
    </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile}/>
  );
}