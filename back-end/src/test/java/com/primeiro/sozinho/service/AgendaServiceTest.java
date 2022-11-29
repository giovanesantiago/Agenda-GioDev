package com.primeiro.sozinho.service;

import com.primeiro.sozinho.model.Contato;
import org.junit.jupiter.api.Test;

class AgendaServiceTest {

    @Test
    void findAll() {
    }

    @Test
    void findByNomeTest() {
        Contato contatoTest = new Contato();
        AgendaService agendaService = new AgendaService();

        contatoTest = agendaService.findByNome("GIo");
        System.out.println(contatoTest.toString());

    }
}