package com.ohgiraffers.mission.domain.dto;


import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class PostDTO {

    private int PostId;
    private int PostNo;
    private String title;
    private String content;

}
