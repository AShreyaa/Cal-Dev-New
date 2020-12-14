package com.personal.calendar.repository;

import com.personal.calendar.bean.UserCalendar;
import org.apache.catalina.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface CalendarRepository extends MongoRepository<UserCalendar, UserCalendar.Title> {

    ArrayList<UserCalendar> findByTitleAccountIgnoreCase(String account);
    ArrayList<UserCalendar> findByArchiveAndTitleAccountIgnoreCase(Boolean archive,String account);
    ArrayList<UserCalendar> findByArchiveAndTitleTypeAndTitleAccountIgnoreCase(Boolean archive,String type,String account);
    ArrayList<UserCalendar> findByTagsAndTitleAccountIgnoreCase(String tags,String account);
    ArrayList<UserCalendar> findByTitleTitleAndTitleAccountIgnoreCase(String title,String account);
    ArrayList<UserCalendar> findByTargetDateAndTitleTypeAndTitleAccountIgnoreCase(String date,String type,String account);

}


