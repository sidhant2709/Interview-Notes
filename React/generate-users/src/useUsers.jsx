import { useState, useEffect, useCallback } from 'react';

const useUserList = () => {
  const [userList, setUserList] = useState([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(null);

  const fetchUserList = useCallback(async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    setUserList(prevList => [...prevList, data.results[0]]);
  }, []);

  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);

  const getCurrentUser = useCallback(() => {
    return userList[currentUserIndex];
  }, [userList, currentUserIndex]);

  const fetchNextUser = useCallback(async () => {
    if (currentUserIndex === null || currentUserIndex === userList.length - 1) {
      await fetchUserList();
      setCurrentUserIndex(0);
    } else {
      setCurrentUserIndex(prevIndex => prevIndex + 1);
    }
  }, [currentUserIndex, fetchUserList, userList]);

  const fetchPrevUser = useCallback(() => {
    if (currentUserIndex !== null && currentUserIndex > 0) {
      setCurrentUserIndex(prevIndex => prevIndex - 1);
    }
  }, [currentUserIndex]);

  useEffect(() => {
    if (userList.length > 0 && currentUserIndex === null) {
      setCurrentUserIndex(0);
    }
  }, [userList, currentUserIndex]);

  return {
    userList,
    getCurrentUser,
    fetchNextUser,
    fetchPrevUser,
  };
};

export default useUserList;
