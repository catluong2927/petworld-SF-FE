package com.petworld.service;

import com.petworld.entity.Role;
import com.petworld.dto.userDto.request.UserDtoCreateRequest;
import com.petworld.dto.userDto.request.UserDtoPassword;
import com.petworld.dto.userDto.request.UserDtoUpdate;
import com.petworld.dto.userDto.response.UserDtoResponse;
import com.petworld.dto.userDto.response.UserDtoResponseDetail;
import com.petworld.payload.response.UserDtoReponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;
import java.util.Optional;

public interface UserService {
    List<UserDtoResponse> findAll();
    List<UserDtoResponse> getUsersByFullName(String fullName);
//    User isExitUserName(String userName);
//    User findUserByEmail(String email);
    UserDtoResponseDetail getUserById(Long customerId);
    Page<UserDtoResponse> getUsers(Pageable pageable);
    Optional<UserDtoResponse> findById(Long id);
    UserDtoReponse save(UserDtoCreateRequest userDtoCreateRequest);
    Boolean remove(Long id);
    Boolean updateSimple(String email, UserDtoUpdate userDtoUpdate);
    Boolean updatePassword (String email, UserDtoPassword userDtoPassword);
    Boolean active(Long id);
    UserDtoResponse getUserByEmail(String email);
    Boolean updateAddRole(Long id, Role role);
    Boolean updateRemoveRole(Long userId, Role role);

}
