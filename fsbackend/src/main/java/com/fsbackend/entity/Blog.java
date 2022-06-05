package com.fsbackend.entity;

import javax.persistence.*;

@Entity
@Table(name = "blog")
public class Blog {

    @Id
    @Column(name = "bid")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long bid;

    @Column(name = "aid")
    private Long aid;

    @Column(name = "dop")
    private String dateOfPublish;

    @Column(name = "content")
    private String content;

    @Column(name = "approved")
    private boolean approved=false;

    @Column(name = "title")
    private String title;


    public Blog() {
    }

    public Blog(Long aid, String dateOfPublish, String content, boolean approved, String title) {
        this.aid = aid;
        this.dateOfPublish = dateOfPublish;
        this.content = content;
        this.approved = approved;
        this.title = title;
    }

    public Blog(Long bid, Long aid, String dateOfPublish, String content, boolean approved, String title) {
        this.bid = bid;
        this.aid = aid;
        this.dateOfPublish = dateOfPublish;
        this.content = content;
        this.approved = approved;
        this.title = title;
    }

    public Blog(Long bid, Long aid, String dateOfPublish, String content) {
        this.bid = bid;
        this.aid = aid;
        this.dateOfPublish = dateOfPublish;
        this.content = content;
    }

    public Blog(Long bid, Long aid, String content) {
        this.bid = bid;
        this.aid = aid;
        this.content = content;
    }

    public Blog(Long aid, String dateOfPublish, String content) {
        this.aid = aid;
        this.dateOfPublish = dateOfPublish;
        this.content = content;
    }

    public Long getBid() {
        return bid;
    }

    public void setBid(Long bid) {
        this.bid = bid;
    }

    public Long getAid() {
        return aid;
    }

    public void setAid(Long aid) {
        this.aid = aid;
    }

    public String getDateOfPublish() {
        return dateOfPublish;
    }

    public void setDateOfPublish(String dateOfPublish) {
        this.dateOfPublish = dateOfPublish;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Blog{" +
                "bid=" + bid +
                ", aid=" + aid +
                ", dateOfPublish='" + dateOfPublish + '\'' +
                ", content='" + content + '\'' +
                ", approved=" + approved +
                ", title='" + title + '\'' +
                '}';
    }
}
